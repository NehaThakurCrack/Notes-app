const notesInfo = require('./node.js');
//const validator=require('validator');
const chalk= require('chalk')
//const yargs=require('yargs')
//yargs.version('1.1.0')

//console.log(yargs.argv)
require('yargs').command({
      command: 'add',
     describe: 'add a new note',
     builder:{ 
        title: {
            describe:'Title of Note',
            demandOption: true,
            type: 'string'
        },
        body: {
          describe:'Body of the title',
          demandOption: true,
          type: 'string'
      }
     } , 
    handler(argv){
       //console.log('Note Title: '+ argv.title)
       //console.log('Title Body: '+argv.body)
       notesInfo.addNotes(argv.title, argv.body)

    }
})
require('yargs').command({
  command: 'remove',
 describe: 'Removing a new note',
 builder:{ 
   title: {
       describe:'Title of Note',
       demandOption: true,
       type: 'string'
   }
},
handler(argv){
   //console.log('Removing a note')
   notesInfo.removeNotes(argv.title)
}
})
require('yargs').command({
  command: 'list',
 describe: 'listing all notes',

handler(){
   console.log('Removing a note')
   notesInfo.listNotes()
}
})
require('yargs').command({
  command: 'read',
  describe: 'Reading notes',
  builder:{ 
    title: {
        describe:'Title of Note',
        demandOption: true,
        type: 'string'
    }
  },
  handler(argv){
    notesInfo.readNotes(argv.title)
  }
})
require('yargs').parse();
//const prt=msg();
//console.log(prt);
//console.log(chalk.green.bold.underline('success'));
//console.log(validator.isDivisibleBy('36',6))
//console.log(yargs.argv)
//fs.writeFileSync('notes.txt', 'This is the first txt file.')
//fs.appendFileSync('notes.txt','Text appneded successfully.')