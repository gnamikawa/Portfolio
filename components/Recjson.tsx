import style from '@/styles/Recjson.module.scss';
export const Recjson = (json: Object) => {
    const jsx = Object.entries(json).map(([k,v]) => {
        const type = typeof(v);
        switch(type){
            case 'string':
            case 'number':
                return <div className={style.card}>
                    <span>{k}: {v}</span>
                </div>;
            case 'object':
                return <div className={style.group}><span>[{k}]{Recjson(v)}</span></div>;
        }
    });
    return jsx;
}