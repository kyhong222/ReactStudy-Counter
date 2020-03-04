import React from 'react';

// class MyName extends Component {
//     static defaultProps = {
//         name: 'default name'
//     }

//     render() {
//         return (
//             <div>
//                 hi my name is <b>{this.props.name}</b>.
//             </div>
//         );
//     }
// }

const MyName = ({name}) => {
    return(
        <div>
            hi my name is {name}.
        </div>
    );
}

export default MyName;