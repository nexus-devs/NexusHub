import pymysql.cursors

# Connect to the database
connection = pymysql.connect(host='localhost',
                             user='root',
                             password='root',
                             db='warframenexus',
                             charset='utf8mb4',
                             cursorclass=pymysql.cursors.DictCursor)

request=0
#'WTS','WTB'
if request=='WTS':
    try:
        with connection.cursor() as cursor:
            # Create a new record in 'Users'
            sql = "INSERT INTO `users` (`Username`) VALUES (%s)"
            cursor.execute(sql, (Username))
        # saves changes
        connection.commit()

        with connection.cursor() as cursor: #not sure if commit after every execute
            # Create a new record in WTS
            last_user = "SELECT 'UID' FROM users ORDER BY UID DESC LIMIT 1"
            cursor.execute(last_user)
            IID = "SELECT 'IID' FROM items WHERE type= %s"
            cursor.execute(IID, (#ItemTypeVariable))
            id = "SELECT id FROM %s WHERE main=### AND secondary=###" #not sure if id is not mistaken for python id command
            cursor.execute(id, (#ItemTypeVariable)
            sql = "INSERT INTO `wts` (`UID`,'IID','%Item%ID','timestamp','price') VALUES (%s)"
            cursor.execute(sql, (last_user, IID, id, now(), ITEMprice))
        connection.commit()

    finally:
        connection.close()

if request=='WTB':
    try:
        with connection.cursor() as cursor:
            # Create a new record in 'Users'
            sql = "INSERT INTO `users` (`Username`) VALUES (%s)"
            cursor.execute(sql, (Username))
        # saves changes
        connection.commit()

        with connection.cursor() as cursor: #not sure if commit after every execute
            # Create a new record in WTB
            last_user = "SELECT 'UID' FROM users ORDER BY UID DESC LIMIT 1"
            cursor.execute(last_user)
            IID = "SELECT 'IID' FROM items WHERE type= %s"
            cursor.execute(IID, (#ItemTypeVariable))
            id = "SELECT id FROM %s WHERE main=### AND secondary=###" #not sure if id is not mistaken for python id command
            cursor.execute(id, (#ItemTypeVariable)
            sql = "INSERT INTO `wts` (`UID`,'IID','%Item%ID','timestamp','price') VALUES (%s)"
            cursor.execute(sql, (last_user, IID, id, now(), ITEMprice))
        connection.commit()


    finally:
        connection.close()

else:
    print('Could not process data')
