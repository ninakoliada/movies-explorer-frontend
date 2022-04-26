import cardImage from "../../images/card-image-1.png";
import EmptyLike from "../../images/card-empty-like.svg";
import FilledLike from "../../images/card-filled-like.svg";
import DeleteImage from "../../images/save-movies-delete-image.svg";

import "./MoviesCard.css";

export const MoviesCard = (props) => {
    return (
        <div className="card">
            <img className="card__image" alt="карточка" src={cardImage} />
            <div className="card__description">
                <p className="card__description-name">33 слова о дизайне</p>
                <button className="card__like-button">
                    {props.isSaved
                        ? <img className="card__delete_image" alt="крестик" src={DeleteImage} />
                        : <img className="card__description-like" alt="лайк" src={props.isLiked ? FilledLike : EmptyLike} />
                    }
                </button>
            </div>
            <p className="card__movie-time">1ч 47м</p>
        </div>
    );
}