import { Link } from '@inertiajs/react';

export const JobPositions = () => {
    return (
        <>
            <div className="flex justify-between items-center">
                <div className="text-lg lg:text-2xl font-medium">IT Staff</div>
                <div className="">
                    <Link
                        as="button"
                        className="btn btn-sm lg:btn-md btn-outline btn-secondary rounded-box normal-case"
                    >
                        Lihat Selengkapnya
                    </Link>
                </div>
            </div>
            <div className="divider"></div>

            <div className="flex justify-between items-center">
                <div className="text-lg lg:text-2xl font-medium">
                    Teknik Sipil
                </div>
                <div className="">
                    <Link
                        as="button"
                        className="btn btn-sm lg:btn-md btn-outline btn-secondary rounded-box normal-case"
                    >
                        Lihat Selengkapnya
                    </Link>
                </div>
            </div>
            <div className="divider"></div>

            <div className="flex justify-between items-center">
                <div className="text-lg lg:text-2xl font-medium">Arsitek</div>
                <div className="">
                    <Link
                        as="button"
                        className="btn btn-sm lg:btn-md btn-outline btn-secondary rounded-box normal-case"
                    >
                        Lihat Selengkapnya
                    </Link>
                </div>
            </div>
            <div className="divider"></div>
        </>
    );
};
