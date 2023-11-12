import PropTypes from 'prop-types';

const link = ({route}) => {
    return (
        <div>
            <li className="mr-10">
                <a href={`route.path`}>{route.name}</a></li>

        </div>
    );
};
link.propTypes = {
    route: PropTypes.object
  };
export default link;