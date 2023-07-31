function PostCard(card) {
    return (
        <div className="post-card-wrapper">
            <div className="post-card-img">
                <img src={image} />
            </div>
            <div className="post-card-description">
                <p>{card.description}</p>
            </div>
            <div className="post-card-footer">
                <p>{card.footer}</p>
            </div>
        </div>
    );
};

export default PostCard;