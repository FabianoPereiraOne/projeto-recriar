export const queryEvents = `
query GetAllEvents {
 posts(orderBy: date_DESC, first: 2, skip: 1) {
   id
   title
   content {
     text
   }
   coverImage {
     url
   }
   date
   address
 }
}

`
