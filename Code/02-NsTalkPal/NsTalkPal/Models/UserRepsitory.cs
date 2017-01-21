using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NsTalkPal.Models
{
    public class UserProfileRepsitory
    {
        private static UserProfileRepsitory repo = new UserProfileRepsitory();
        public static UserProfileRepsitory Current
        {
            get
            {
                return repo;
            }
        }

        private List<UserProfile> data = new List<UserProfile>
        {
            new UserProfile { UserId=1,Name="Peter", Surname="Griffin", Nickname="HanSolo88", City="Palma", Neighborhood="Bons Aires", Email="peter@griffin_familiy.tk", ProfilePictureSource="http://www.tv-reviewed.com/wp-content/uploads/2008/06/family-guy.jpg"},
            new UserProfile { UserId=2,Name="Brian", Surname="Griffin", Nickname="Chewee23", City="Palma", Neighborhood="Es Rafal", Email="brian@griffin_familiy.tk", ProfilePictureSource="http://vignette2.wikia.nocookie.net/familyguy/images/c/c2/Brian_as_Chewie.jpg/revision/latest?cb=20101015163335"},
            new UserProfile { UserId=3,Name="Lois", Surname="Griffin", Nickname="Leia99", City="Palma", Neighborhood="La Vileta", Email="lois@griffin_familiy.tk", ProfilePictureSource="http://vignette2.wikia.nocookie.net/familyguy/images/c/ca/Lois_as_Leia.jpg/revision/latest?cb=20100919172127"},
            new UserProfile { UserId=4,Name="Stewe", Surname="Griffin", Nickname="DarthVader18", City="Palma", Neighborhood="Son Espanyolet", Email="stewe@griffin_familiy.tk", ProfilePictureSource="http://files.onset.freedom.com/ocregister/Star_Wars_timeline/family_guy_sw_stewie.jpg"},
            new UserProfile { UserId=5,Name="Glenn", Surname="Quagmire", Nickname="C3po33", City="Palma", Neighborhood="Coll d'en Rabassa", Email="glenn@glenn_industries.tk", ProfilePictureSource="https://coubsecure-a.akamaihd.net/get/b115/p/coub/simple/cw_image/b60371ba330/9303496763a3d7763a66d/cotd_email_1440341512_00032.jpg"},
            new UserProfile { UserId=6,Name="Chris", Surname="Griffin", Nickname="LuckSkywalker02", City="Palma", Neighborhood="Son Oliva", Email="chris@griffin_familiy.tk", ProfilePictureSource="http://f.tqn.com/y/animatedtv/1/S/W/z/fgds_chris.jpg"},
            new UserProfile { UserId=7,Name="Meg", Surname="Griffin", Nickname="Worm26", City="Marratxi", Neighborhood="Sa Cabaneta", Email="megg@griffin_familiy.tk", ProfilePictureSource="http://vignette1.wikia.nocookie.net/vsbattles/images/7/74/Bonus-meg-griffin-as-space-slug-342-main-1-.jpg/revision/latest?cb=20141210224503"},
            new UserProfile { UserId=8,Name="Klaus", Surname="Fischermann", Nickname="Clamary65", City="Palma", Neighborhood="Son Gotleu", Email="klau@american_dad.tk", ProfilePictureSource="http://vignette1.wikia.nocookie.net/familyguy/images/9/9a/Klausakbar.png/revision/latest?cb=20101117100202"},
        };

        //Peter Griffin han solo http://www.tv-reviewed.com/wp-content/uploads/2008/06/family-guy.jpg
        //peter han solo bigh http://ia.media-imdb.com/images/M/MV5BMTYyMzkxNjAzMF5BMl5BanBnXkFtZTcwMTkwOTU0Mw@@._V1_SX640_SY720_.jpg
        //Brian Griffin chewaka http://vignette2.wikia.nocookie.net/familyguy/images/c/c2/Brian_as_Chewie.jpg/revision/latest?cb=20101015163335
        //Lois Griffin leia http://vignette2.wikia.nocookie.net/familyguy/images/c/ca/Lois_as_Leia.jpg/revision/latest?cb=20100919172127
        //Stewe Griffin darth vader http://files.onset.freedom.com/ocregister/Star_Wars_timeline/family_guy_sw_stewie.jpg
        //Glenn Quagmire c3po https://coubsecure-a.akamaihd.net/get/b115/p/coub/simple/cw_image/b60371ba330/9303496763a3d7763a66d/cotd_email_1440341512_00032.jpg
        //Chris Griffin Luck http://f.tqn.com/y/animatedtv/1/S/W/z/fgds_chris.jpg
        //Meg Griffin http://vignette1.wikia.nocookie.net/vsbattles/images/7/74/Bonus-meg-griffin-as-space-slug-342-main-1-.jpg/revision/latest?cb=20141210224503
        //klaus clamari american dad http://vignette1.wikia.nocookie.net/familyguy/images/9/9a/Klausakbar.png/revision/latest?cb=20101117100202

        public IEnumerable<UserProfile> GetAll() { return data; }
        public UserProfile Get(int id)
        {
            return data.Where(r => r.UserId == id).FirstOrDefault();
        }
        public UserProfile Add(UserProfile item)
        {
            item.UserId = data.Count + 1;
            data.Add(item); return item;
        }
        public void Remove(int id)
        {
            UserProfile item = Get(id);
            if (item != null)
            {
                data.Remove(item);
            }
        }
        public bool Update(UserProfile item)
        {
            UserProfile storedItem = Get(item.UserId);
            if (storedItem != null) {
                storedItem.Name = item.Name;
                storedItem.Surname = item.Surname;
                storedItem.Nickname = item.Nickname;
                storedItem.Email = item.Email;
                storedItem.City = item.City;
                storedItem.Neighborhood = item.Neighborhood;
                storedItem.ProfilePictureSource = item.ProfilePictureSource;
                
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}