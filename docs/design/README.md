# Проєктування бази даних

В рамках проекту розробляється: 
- модель бізнес-об'єктів
@startuml 
entity Category 
 
entity Category.id <<NUMBER>> #ffffff 
entity Category.name <<TEXT>> #ffffff 
entity Category.hex_code <<TEXT>> #ffffff 
 
entity DataSet 
 
entity DataSet.id <<NUMBER>> #ffffff 
entity DataSet.name <<TEXT>> #ffffff 
entity DataSet.description <<TEXT>> #ffffff 
entity DataSet.category_id <<NUMBER>> #ffffff 
 
entity DataFile 
 
entity DataFile.id <<NUMBER>> #ffffff 
entity DataFile.name <<TEXT>> #ffffff 
entity DataFile.description <<TEXT>> #ffffff 
entity DataFile.file_csv <<TEXT>> #ffffff 
entity DataFile.provider <<TEXT>> #ffffff 
entity DataFile.date_creation <<DATE>> #ffffff 
entity DataFile.confirmed <<BOOL>> #ffffff 
entity DataFile.created_by_id <<NUMBER>> #ffffff 
entity DataFile.data_set_id <<NUMBER>> #ffffff 
 
entity User 
 
entity User.id <<NUMBER>> #ffffff 
entity User.password <<TEXT>> #ffffff 
entity User.is_superuser <<BOOL>> #ffffff 
entity User.username <<TEXT>> #ffffff 
entity User.first_name <<TEXT>> #ffffff 
entity User.last_name <<TEXT>> #ffffff 
entity User.email <<TEXT>> #ffffff 
entity User.is_staff <<BOOL>> #ffffff 
entity UserGroup 
 
entity UserGroup.id <<NUMBER>> #ffffff 
entity UserGroup.name <<TEXT>> #ffffff 
entity UserGroup.user_id <<NUMBER>> #ffffff 
entity UserGroup.permission_id <<NUMBER>> #ffffff 
 
entity Permission 
 
entity Permission.id <<NUMBER>> #ffffff 
entity Permission.name <<TEXT>> #ffffff 
entity Permission.codename <<TEXT>> #ffffff 
 
 
Category "1,1" --u- "0,*" DataSet 
DataSet "1,1" --u- "0,*" DataFile 
User "1,1" --d- "0,*" UserGroup 
DataFile "0,*" --down- "0,*" User 
UserGroup "1,1" --down- "0,*" Permission 
 
Category.id -u-* Category 
Category.name -u-* Category 
Category.hex_code -u-* Category 
 
DataSet.id -l-* DataSet 
DataSet.name -u-* DataSet 
 
DataSet.description -r-* DataSet 
DataSet.category_id -u-* DataSet 
 
DataFile.id -d-* DataFile 
DataFile.name -d-* DataFile 
DataFile.description -d-* DataFile 
DataFile.file_csv -d-* DataFile 
DataFile.provider -d-* DataFile 
DataFile.date_creation -d-* DataFile 
DataFile.confirmed -d-* DataFile 
DataFile.created_by_id -d-* DataFile 
DataFile.data_set_id -d-* DataFile 
 
User.id -d-* User 
User.password -d-* User 
User.is_superuser -d-* User 
User.username -d-* User 
User.first_name -d-* User 
User.last_name -d-* User 
User.email -d-* User 
User.is_staff -d-* User 
 
UserGroup.id -r-* UserGroup 
UserGroup.name -r-* UserGroup 
UserGroup.user_id -l-* UserGroup 
UserGroup.permission_id -l-* UserGroup 
 
Permission.id -u-* Permission 
Permission.name -u-* Permission 
Permission.codename -u-* Permission 
 
 
@enduml
- ER-модель
@startuml
entity Category {
id: INT
name: TEXT
hex_code: TEXT
}

entity DataSet {
id: INT
name: TEXT
description: TEXT
category_id: NUMBER
}

entity DataFile {
id: INT
name: TEXT
description: TEXT
file_csv: TEXT
provider: TEXT
date_creation: DATE
confirmed: BOOL
created_by_id: INT
data_set_id: INT
}

entity User {
id: INT
password: TEXT
last_login: DATE
is_superuser: BOOL
username: TEXT
first_name: TEXT
last_name: TEXT
email: TEXT
is_staff: BOOL
is_active: BOOL
date_joined: DATE
}

entity UserGroup {
id: INT
name: TEXT
user_id: INT
permission_id: INT
}

entity Permission {
id: INT
name: TEXT
codename: TEXT
}

Category "1,1" <-down- "0,*" DataSet: Has
DataSet "1,1" <-left- "0,*" DataFile: Includes
User "1,1" <-left- "0,*" UserGroup: Belongs To
UserGroup "1,1" -down-> "0,*" Permission: Has
User "0,*" <-- "0,*" DataFile
@enduml
- реляційна схема

![Relational schema](https://i.imgur.com/5IMfr2W.png)