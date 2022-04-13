

const ChangeTitle = (props) => {

    return(
        <div>
             <input type="text"
                    label={'title'}
                    name={'title'}
                    onChange={props.onChange}
                    value={props.title}
                />
                <div>
                    <button onClick={props.changeTitleBtn}>Change Title </button>
                </div>
                
        </div>
    )

}

export default ChangeTitle;