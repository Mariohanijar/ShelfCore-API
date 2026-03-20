import { prisma } from "../../lib/prisma.js";

interface RegisterLoanSchema {
    bookId: string,
    userId: string
}

export async function loanBookUseCase({bookId,userId}: RegisterLoanSchema) {
  const book = await prisma.book.findUnique({
    where: { id: bookId },
  })

  if (!book) {
    throw new Error("Book not found")
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
  })

   if (!user) {
    throw new Error("User not found")
  }

  const alreadyLoaned = await prisma.loan.count({
    where: {
      user_id: userId,
      book_id: bookId,
      returnedAt: null
    },
  })

  if(alreadyLoaned > 0){
    throw new Error("Book already loaned")
  }

  const isUserHaveMoreThanTwoBooks = await prisma.loan.count({
    where: {
      user_id: userId,
      returnedAt: null
    },
  })

  if(isUserHaveMoreThanTwoBooks >= 2){
    throw new Error("The user cannot have more than 2 books")
  }

  if(book.availableQuantity <= 0){
    throw new Error("the book is out of the stock")
  }


  const returnDate = new Date()
  returnDate.setDate(returnDate.getDate() + 7) 

  const loan = await prisma.loan.create({
    data: {
      user_id: userId,
      book_id: bookId,
      returnDate
    }
  })


  await prisma.book.update({
  where: { id: bookId },
  data: {
    availableQuantity: {
      decrement: 1
    }
  }
  })

  return loan
}
 