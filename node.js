console.log('node.js')
const fs=require('fs')
const getNotes= ()=>{
    return 'My notes.....';
}
const listNotes=()=>{
    const loaded= loadNotes()
    console.log(require('chalk').green.inverse("Your Notes:"))
    loaded.forEach(element => console.log(element.title))
}
debugger
const readNotes=(title)=>{
    const loaded=loadNotes()
    const findNotes=loaded.find((note)=> note.title===title)
    //console.log(findNotes)
    if (findNotes === undefined )
    console.log(require('chalk').red.inverse("Notes did not find"))
    else {
        console.log("Title: "+ require('chalk').italic(findNotes.title))
        console.log("Notes content: "+findNotes.body)
    }

}
const addNotes=(title,body)=>{
    console.log('hi')
        const loaded=loadNotes()
        console.log(loaded)
        const duplicateData=loaded.find((note)=> note.title===title)//loaded.filter((note)=> return note.title===title  )
        if(duplicateData === undefined)
        {
        loaded.push({
            title: title,
            body: body
        })
        saveNotes(loaded)
        console.log('notes added')
    }
    else
        console.log('Data already present')
    
}
const saveNotes=(loaded)=>{
    const actualData=JSON.stringify(loaded)
    fs.writeFileSync('notes.json', actualData)

}
const loadNotes=()=>{
    try{
        const bufferData=fs.readFileSync('notes.json')
        const plainData=bufferData.toString()
        return JSON.parse(plainData)
    }
    catch(e){
        return []
    }
}
const removeNotes=(title)=>{
        const loaded=loadNotes()
        //const flag=0
        const filteredData=loaded.filter((note)=>note.title!==title)
        
        if(filteredData.length === loaded.length)
        console.log(require('chalk').red.inverse('No Note Removed!'))
        else{
            saveNotes(filteredData)
        console.log(require('chalk').green.inverse('Note Removed!'))
        }
}
module.exports=
{
    getNotes:getNotes,
    addNotes:addNotes,
    removeNotes:removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}