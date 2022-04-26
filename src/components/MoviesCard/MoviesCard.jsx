import EmptyLike from "../../images/card-empty-like.svg";
import FilledLike from "../../images/card-filled-like.svg";
import DeleteImage from "../../images/save-movies-delete-image.svg";

import "./MoviesCard.css";

export const MoviesCard = ({ isSaved, isLiked, imageSrc, name, duration, href }) => {
    function onClickLike (event) {
        event.preventDefault();
    }

    return (
        <a className="card" href={href} target="_blank" rel="noreferrer">
            <img className="card__image" alt="карточка" src={imageSrc} />
            <div className="card__description">
                <p className="card__description-name">{name}</p>
                <button className="card__like-button" onClick={onClickLike}>
                    {isSaved
                        ? <img className="card__delete_image" alt="крестик" src={DeleteImage} />
                        : <img className="card__description-like" alt="лайк" src={isLiked ? FilledLike : EmptyLike} />
                    }
                </button>
            </div>
            <p className="card__movie-time">{duration}</p>
        </a>
    );
}