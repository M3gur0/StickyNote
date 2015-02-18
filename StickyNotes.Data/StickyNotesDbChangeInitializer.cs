using StickyNotes.Business.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StickyNotes.Data
{
    public class StickyNotesDbChangeInitializer : DropCreateDatabaseIfModelChanges<StickyNotesContext>
    {
        protected override void Seed(StickyNotesContext context)
        {
            List<Note> notes = new List<Note>() { 
                new Note(){ Title= "note #1", Content= "that is the content of note #1", Owner = "M3gur0" },
                new Note(){ Title= "note #2", Content= "that is the content of note #2", Owner = "M3gur0" },
                new Note(){ Title= "note #3", Content= "Lorem ipsum dolor sit amet, co", Owner = "M3gur0" },
                new Note(){ Title= "note #4", Content= "that is the content of note #4", Owner = "M3gur0" },
                new Note(){ Title= "note #5", Content= "that is the content of note #5", Owner = "M3gur0" },
                new Note(){ Title= "note #6", Content= "that is the content of note #6", Owner = "M3gur0" },
                new Note(){ Title= "note #7", Content= "that is the content of note #7", Owner = "M3gur0" },
                new Note(){ Title= "note #8", Content= "that is the content of note #8", Owner = "M3gur0" }
            };

            context.NoteSet.AddRange(notes);
            context.SaveChanges();
        }
    }
}
