using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using NsTalkPal.Models;

namespace NsTalkPal.Controllers
{
    public class HomeController : Controller
    {
        private UserProfileRepsitory repo = UserProfileRepsitory.Current;
        // GET: Home
        public ActionResult Index()
        {
            return View(repo.GetAll());
        }
        public ActionResult Add(UserProfile item)
        {
            if (ModelState.IsValid)
            {
                repo.Add(item);
                return RedirectToAction("Index");
            }
            else
            {
                return View("Index");
            }
        }
        public ActionResult Remove(int id)
        {
            repo.Remove(id);
            return RedirectToAction("Index");
        }
        public ActionResult Update(UserProfile item)
        {
            if (ModelState.IsValid && repo.Update(item))
            {
                return RedirectToAction("Index");
            }
            else
            {
                return View("Index");
            }
        }
    }
}