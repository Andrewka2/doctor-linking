import React from 'react'
import { UserInfoFieldComponent } from '../UserInfoFIeld/UserInfoFieldComponent'
import classes from './UserInfo.module.scss'

export function UserInfoComponent({ choosedUser }) {
    
    return (
        <div className={classes.userInfoContainer}>

            <div className={classes.container}>
                <div className={classes.header}>
                    <div className={classes.headerBtn}>
                        <p>Редагувати</p>
                    </div>
                    <div className={classes.headerBtn}>
                        <p>Видалити</p>
                    </div>
                </div>
                <div className={classes.userDataContainer}>
                    <div className={classes.personalData}>

                        <UserInfoFieldComponent sectionName={"Ім'я :"} sectionData={choosedUser.name} />
                        <UserInfoFieldComponent sectionName={"Прізвище :"} sectionData={choosedUser.surname} />
                        <UserInfoFieldComponent sectionName={"Посада :"} sectionData={choosedUser.position} />

                    </div>
                    <div className={classes.contactData}>

                        <UserInfoFieldComponent sectionName={"email :"} sectionData={choosedUser.email} />
                        <UserInfoFieldComponent sectionName={"телефон :"} sectionData={choosedUser.phone} />

                    </div>
                </div>
            </div>

        </div>
    )
}