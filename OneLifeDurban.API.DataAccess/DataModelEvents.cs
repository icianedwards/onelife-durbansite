using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Core.Objects;
using System.Data.Entity.Infrastructure;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OneLifeDurban.API.DataAccess
{
    public partial class Entities : DbContext
    {
        private string loggedOnUserName = "Anonymous";

        public Entities(string userName) : base()
        {
            loggedOnUserName = (userName ?? loggedOnUserName);
        }

        public override int SaveChanges()
        {
            var changeSet = ChangeTracker.Entries();
            if (changeSet != null)
            {
                foreach (DbEntityEntry dbEntityEntry in changeSet)
                {
                    switch (dbEntityEntry.State)
                    {
                        case EntityState.Added:
                            {
                                Type t = dbEntityEntry.Entity.GetType();
                                var updatedDate = t.GetProperty("UpdatedDate");
                                var createdDate = t.GetProperty("CreatedDate");
                                var updatedByUserName = t.GetProperty("UpdatedByUserName");
                                var createdByUserName = t.GetProperty("CreatedByUserName");
                                if (updatedDate != null)
                                {
                                    updatedDate.SetValue(dbEntityEntry.Entity, DateTime.Now);
                                }
                                if (createdDate != null)
                                {
                                    createdDate.SetValue(dbEntityEntry.Entity, DateTime.Now);
                                }
                                if (updatedByUserName != null)
                                {
                                    updatedByUserName.SetValue(dbEntityEntry.Entity, loggedOnUserName);
                                }
                                if (createdByUserName != null)
                                {
                                    createdByUserName.SetValue(dbEntityEntry.Entity, loggedOnUserName);
                                }
                            }
                            break;
                        case EntityState.Modified:
                            {
                                Type t = dbEntityEntry.Entity.GetType();
                                var updatedDate = t.GetProperty("UpdatedDate");
                                var updatedByUserName = t.GetProperty("UpdatedByUserName");
                                if (updatedDate != null)
                                {
                                    updatedDate.SetValue(dbEntityEntry.Entity, DateTime.Now);
                                }
                                if (updatedByUserName != null)
                                {
                                    updatedByUserName.SetValue(dbEntityEntry.Entity, loggedOnUserName);
                                }
                            }
                            break;
                    }
                }
            }

            return base.SaveChanges();
        }
    }
}

