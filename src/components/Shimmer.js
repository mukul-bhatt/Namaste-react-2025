import "./Shimmer.css";

const Shimmer = () => {
    return (
        <div className="shimmer-card">
                    <div className="shimmer-image"></div>
                    <div className="shimmer-content">
                        <div className="shimmer-title"></div>
                        <div className="shimmer-subtitle"></div>
                        <div className="shimmer-rating">
                            <div className="shimmer-star"></div>
                            <div className="shimmer-rating-text"></div>
                        </div>
                        <div className="shimmer-info">
                            <div className="shimmer-price"></div>
                            <div className="shimmer-time"></div>
                        </div>
                    </div>
        </div>
    )
}

export default Shimmer;