import React from 'react'
import { UserItemComponent } from '../UserItem/UserItemComponent';
import classes from './AllUsers.module.scss'

export function AllUsersComponent({isAddHandler, chooseUserHandler, users}) {
    return (
        <div className={classes.usersContainer}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <div className={classes.headerBtn}>
                        <p>Фільтри</p>
                    </div>
                    <div onClick={isAddHandler} className={classes.headerBtn}>
                        <p>Додати</p>
                    </div>
                    <div className={classes.headerBtn}>
                        <p>Видалити</p>
                    </div>
                </div>
                <div className={classes.usersList}>
                    {
                        users.map((elem, index)=>{
                            return <UserItemComponent chooseUserHandler={chooseUserHandler} id={elem.id} email={elem.email} 
                            name={elem.name} surname={elem.surnmae} position={elem.position}
                            phone={elem.phone} role={elem.role} isTemporary={elem.isTemporary}
                            key={`key-${index}-${elem.name}`}/>
                        })
                    }
                </div>
            </div>
        </div>
    );
}