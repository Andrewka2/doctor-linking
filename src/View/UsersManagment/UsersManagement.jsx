import React from 'react'
import classes from './UserManagement.module.scss'
import { PageHeader } from '../../Components/PageHeader/PageHeader'
import addUser from '../../assets/add-user.png'
import update from '../../assets/update.png'
import CreateUserFrom from '../../Components/CreateUserForm/CreateUserFrom'
import AddFormItem from '../../Components/AddFormItem/AddFormItem'
import { useSelector } from 'react-redux'
import { AllUsersComponent } from '../../Components/AllUsersComponent/AllUsersComponent'
import { UserInfoComponent } from '../../Components/UserInfoComponent/UserInfoComponent'
import { useState } from 'react'
import { useCallback } from 'react'


function UsersManagmant() {

  let users = useSelector(state => state.users)

  let [choosedUser, setChoosedUser ] = useState(null)
  let [isAdd, setIsAdd] = useState(false)

  const isAddHandler = useCallback(()=>{
    setChoosedUser(null)
    setIsAdd(!isAdd)
  }, [isAdd, choosedUser])

  const chooseUserHandler = useCallback((id)=>{
    let user = users.users.find((elem)=> elem.id === id)
    setChoosedUser(user)
    setIsAdd(false)
  }, [isAdd, choosedUser])

  return (
    <div className={classes.UsersManagement}>
      <PageHeader title={'Управління користувачами'} />
      <div className={classes.container}>
        <div className={classes.navBtns}>
          <div className={classes.changeBtn}>
            <div className={classes.image}>
              <img src={addUser} alt="add-user" />
            </div>
            <div className={classes.text}>
              <p>Create Users</p>
            </div>
          </div>
          <div className={[classes.changeBtn, classes.unChoosed].join(' ')}>
            <div className={classes.image}>
              <img src={update} alt="add-user" />
            </div>
            <div className={classes.text}>
              <p>Update User</p>
            </div>
          </div>
        </div>
        <div className={classes.contentContainer}>
          <div className={classes.line}>

          </div>
          <div className={classes.elems}>
            <AllUsersComponent isAddHandler={isAddHandler} chooseUserHandler={chooseUserHandler} users={users.users}/>
            {
              choosedUser ? <UserInfoComponent choosedUser={choosedUser}/> : null 
            }
            {
              isAdd ? <CreateUserFrom/> : null 
            }
            
            {
              /*
                <CreateUserFrom/>  
              */
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default UsersManagmant