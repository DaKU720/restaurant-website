import PropTypes from "prop-types";

const StarRating = ({value, size}) => (
    <div className="flex justify-center mt-2">
        {[...Array(5)].map((_, index) => (
            <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                fill={index < value ? '#FFD700' : 'none'}
                stroke="currentColor"
                viewBox="0 0 24 24"
                width={size}
                height={size}
                className="mx-1 text-[#FFD700]"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 17.3l-5.6 3.7 1.6-6.2-4.8-4.1 6.3-.5L12 4l2.5 6.1 6.3.5-4.8 4.1 1.6 6.2z"
                />
            </svg>
        ))}
    </div>
)

export default StarRating

StarRating.propTypes = {
    value: PropTypes.number.isRequired,
    size: PropTypes.number,
}

StarRating.defaultProps = {
    size: 32,
}
