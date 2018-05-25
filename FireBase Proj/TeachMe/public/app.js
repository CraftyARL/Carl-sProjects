document.addEventListener("DOMContentLoaded", event =>{

    const app = firebase.app();

    const db = firebase.firestore();

    const myPost = db.collection(`post`).doc(`firstpost`);

    myPost.get()
        .then(doc => {
            const dadat = doc.data();
            document.write(data.title + `<br>`)
            document.write(data.createdAt)
        })
   


});




    
