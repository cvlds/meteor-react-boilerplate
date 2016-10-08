
import React, {PropTypes} from 'react';

const Home = (props) => {
 if(props.loading){
   return(<Content isLoading />)
 }
 else{
   return (
     <Content {...props}>

     </Content>
   );
 }
}

Home.propTypes = {
 user: PropTypes.object,
};

export default Home;
