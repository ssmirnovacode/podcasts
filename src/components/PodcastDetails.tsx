import "./PodcastDetails.css";
import { convertMsToTime } from "../utils/convertMilis";

const PodcastDetails = () => {
  return (
    <div class="podcast-details">
      <section class="podcast-count">
        <div>
          Episodes: <span>{details?.count}</span>
        </div>
      </section>
      <section class="podcast-episodes">
        {details.episodes?.map((item) => {
          return (
            <div key={item.id} class="table-item">
              <div class="table-item__title">
                <Link to={`episode/${item.id}`}>{item.title}</Link>
              </div>
              <div class="table-item__date">{item.date}</div>
              <div class="table-item__duration">
                {convertMsToTime(item.duration)}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default PodcastDetails;
