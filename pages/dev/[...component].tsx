import { useRouter } from 'next/router'
import glob, { promise } from 'glob-promise'
import { parse, dirname, basename, relative, resolve, join } from 'path';
import React, { useEffect, useState } from 'react';
import { JsxElement } from 'typescript';

export async function getServerSideProps(context) {
    const projectRoot = resolve(dirname(require.main.filename ?? ''))
    const globPattern = join(projectRoot, 'components', '**/*.tsx').replace(/\\/g, '/');
    const filepaths = await glob(globPattern, {absolute:false});
    return {
        props: {
            filepaths: filepaths.map(filepath => relative(join(projectRoot, 'components'), filepath).replace(/\\/g, '/'))
        }
    }
}

export default function Components(props) {
    const router = useRouter();
    const componentQuery = `${[router.query.component].flat(1).slice(1).join('/')}.tsx`;
    const [components, setComponents] = useState({});
    useEffect( () => { ( async () => {
        const modules = Object.fromEntries( await Promise.all(props.filepaths.map( async filepath => {
            const awaitable = await import(`components/${filepath}`).then( module => module.default ).catch( () => undefined );
            return [filepath, awaitable];
        } ) ) );
        setComponents(modules);
    })() }, [props.filepaths] );
    const Component = components[componentQuery] ?? ( () => <>invalid component</> );

    return <Component/>;
}