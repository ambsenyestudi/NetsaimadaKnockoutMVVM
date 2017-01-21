using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using NsTalkPal.Models;
namespace NsTalkPal.Controllers
{
    public class WebController : ApiController
    {
        private UserProfileRepsitory repo = UserProfileRepsitory.Current;

        // GET: api/Web
        public IEnumerable<UserProfile> Get()
        {
            return repo.GetAll();
        }

        // GET: api/Web/5
        public UserProfile Get(int id)
        {
            return repo.Get(id);
        }

        // POST: api/Web
        public UserProfile PostUserProfile(UserProfile userProfile)
        {
            return repo.Add(userProfile);
        }

        // PUT: api/Web/5
        public bool PutUserProfile(UserProfile userProfile)
        {
            return repo.Update(userProfile);
        }

        // DELETE: api/Web/5
        public void Delete(int id)
        {
            repo.Remove(id);
        }
    }
}
