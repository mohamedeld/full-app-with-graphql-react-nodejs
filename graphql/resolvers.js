const allBooks = [
  {
    title:"mohamed",
    author:'ali'
  },
  {
    title:"first",
    author:"mohamed"
  }
]

const resolvers = {
  Query:{
    books:()=>{
      return allBooks;
    }
  },
  Mutation:{

  }
}