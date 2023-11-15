import PropTypes from 'prop-types';
import { AiFillCheckCircle } from "react-icons/ai";

const Feature = ({ feature }) => {
    return (
        <div className='m-2'>
            <p className='flex items-center '> 
            <AiFillCheckCircle className='text-green-300 mr-2'></AiFillCheckCircle> {feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;