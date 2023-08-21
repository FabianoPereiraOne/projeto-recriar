export const queryEvents = `
query GetAllEvents {
 posts(orderBy: date_DESC) {
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
