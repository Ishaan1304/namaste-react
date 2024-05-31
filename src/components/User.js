const User = (props) => {
    const {name}=props;
    return (
        <div className="user-card">
            <h2>Name : {name}</h2>
            <h2>Location : Ujjain</h2>
            <h3>Contact: @ishaangangrade</h3>
        </div>
    );
};

export default User;