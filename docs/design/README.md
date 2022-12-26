# Проєктування бази даних

В рамках проекту розробляється: 
- модель бізнес-об'єктів 
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