import defaultAvatar from "../../../../assets/default-avatar.svg";

export const Person = ({ people }) => {
  return (
    <ul>
      {people.map(({ id, name, nickName, images }) => (
        <li key={id}>
          <div>
            <h3>{name || "Anonymous"}</h3>
            {nickName && <span>{nickName}</span>}
          </div>

          <ul>
            {(!images || images.length <= 0) && (
              <li>
                <img
                  src={defaultAvatar}
                  alt={name}
                  style={{
                    width: "50px",
                  }}
                />
              </li>
            )}

            {images?.length > 0 &&
              images?.map(({ small: { url } }) => (
                <li key={url}>
                  <img
                    src={url}
                    alt={name}
                    style={{
                      width: "50px",
                    }}
                  />
                </li>
              ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};
