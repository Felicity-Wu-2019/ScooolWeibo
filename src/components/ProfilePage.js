import React from 'react';

export default function ProfilePage(props){
    const {match}=props;
    return(
        <div>个人资料页,id是{match.params.id}</div>
    );
};