import { prisma } from "../../lib/prisma.js"


export async function returnBorrowedBookUseCase(id: string) {
    const loan = await prisma.loan.findUnique({
    where: { id },
  })

  if (!loan) {
    throw new Error("loan not found")
  }

     const isLoaned = await prisma.loan.count({
    where: {
      id,
      returnedAt: null
    },
  })

  if(isLoaned <= 0){
    throw new Error("Book is not loaned")
  }
  
  
  const returnAt = new Date()
  await prisma.loan.update({
    where:{id},
    data:{returnedAt: returnAt}
  })

  await prisma.book.update({
    where:{id: loan.book_id},
    data:{
        availableQuantity: {
            increment: 1
        }
    }
  })
  
}





  



