using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NsTalkPal.Models
{
    public class UserProfile
    {
        public int UserId { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Nickname { get; set; }
        public string Email { get; set; }
        public string City { get; set; }
        public string Neighborhood { get; set; }
        public string ProfilePictureSource { get; set; }
    }
}