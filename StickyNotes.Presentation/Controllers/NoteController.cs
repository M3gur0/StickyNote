using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace StickyNotes.Presentation.Controllers
{
    public class NoteController : Controller
    {
        // GET: Note
        public ActionResult List()
        {
            return View();
        }

        public ActionResult View()
        {
            return base.View();
        }
    }
}