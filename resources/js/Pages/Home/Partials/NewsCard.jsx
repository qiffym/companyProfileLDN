const NewsCard = () => {
    return (
        <div className="card lg:w-[31%] md:w-[45%] w-full bg-base-100 shadow-xl image-full">
            <figure>
                <img src={`/storage/img/ptldnmockup.jpg`} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Heboh!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">SELENGKAPNYA</button>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
