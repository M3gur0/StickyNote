namespace StickyNotes.Data
{
    using StickyNotes.Business.Entities;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    public class StickyNotesContext : DbContext
    {
        public DbSet<Note> NoteSet { get; set; }

        public StickyNotesContext() : base("StickyNotesContext")
        {
        }
    }
}
