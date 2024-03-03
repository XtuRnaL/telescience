import React from 'react';

const Images = ({ selectedMap, image }) => {
    const info = mapInfo(selectedMap);
    return (
        <div onDragStart={e => e.preventDefault()}>
            {(() => {
                const arr = [];
                for (let i = 0; i < 8; i++) {
                    for (let g = 0; g < 8; g++) {
                        arr.push(`${i},${g}`);
                    }
                }
                return arr;
            })().map(url => {
                return <img className={image} key={url} alt={url} src={`${info}/${url}.png`} />;
            })}
        </div>
    );
    function mapInfo(selectedMap) {
        const info = {
            cogmap1: `https://goonhub.com/storage/maps/cogmap/z1`,
            cogmap2: `https://goonhub.com/storage/maps/cogmap2/z1`,
            faintSignal: `https://goonhub.com/storage/maps/cogmap2/z3`,
            oshan: `https://goonhub.com/storage/maps/oshan/z1`,
            clarion: `https://goonhub.com/storage/maps/clarion/z1`,
            destiny: `https://goonhub.com/storage/maps/destiny/z1`,
            atlas: `https://goonhub.com/storage/maps/atlas/z1`,
            horizon: `https://goonhub.com/storage/maps/horizon/z1`,
            donut3: `https://raw.githubusercontent.com/j-awn/telescience/master/public/donut3`,
            mushroom: `https://raw.githubusercontent.com/j-awn/telescience/master/public/mushroom`,
            manta: `https://goonhub.com/storage/maps/manta/z1`,
            kondaru: `https://goonhub.com/storage/maps/kondaru/z1`,
            donut2: `https://goonhub.com/storage/maps/donut2/z1`,
            fleet: `https://goonhub.com/storage/maps/bellerophon%20fleet/z1`,
        };
        if (!info[selectedMap]) return info['cogmap1'];
        return info[selectedMap];
    }
};

export default Images;
