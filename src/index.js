import {initializeApp} from 'firebase/app'
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAi0AnFVjmw9rtWE8AsU7QJ9DKdDbTg4bc",
    authDomain: "lombaz-f3351.firebaseapp.com",
    projectId: "lombaz-f3351",
    storageBucket: "lombaz-f3351.appspot.com",
    messagingSenderId: "163673553412",
    appId: "1:163673553412:web:1a3b5a652be258956e1351"
  }; 
//init firebase app
initializeApp(firebaseConfig)

// init services
const db = getFirestore()




//collection ref
const colRef = collection(db, 'books')






//get collection data
getDocs(colRef)
  .then((snapshot) =>{
    console.log(snapshot.docs)
    let books = []
    snapshot.docs.forEach((doc)=> {
      books.push({ ...doc.data(), id: doc.id })

    })
    console.log(books)
  })
  .catch( err => {
    console.log(err.message)
  })

  // adding documents to the firestore backend

const addBookForm = document.querySelector('.add')
addBookForm.addEventListener('submit', (e) => {
  e.preventDefault()

  addDoc(colRef, {
    name: addBookForm.name.value,
    description:addBookForm.description.value,
    phone :addBookForm.phone.value,
    tracking:addBookForm.tracking.value,
    sendername:addBookForm.sname.value,
    receivername:addBookForm.rname.value,
    senderaddress:addBookForm.saddress.value,
    receiveraddress:addBookForm.raddress.value

  })
  .then(() => {
    addBookForm.reset()
  })
})