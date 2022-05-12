import { Recjson } from '@/components/Recjson';
import Head from 'next/head'
import styles from '../styles/jsonNotes.module.scss'


export default function jsonNotes() {
    const D = () => Recjson({hello:"hello", asdf: {asdf:{asdf:{asdf:"asdf",asdf2:"asdf"}}}, world: {worldinner: "world"}, world2: {worldinner: "world"}});
    return <D></D>;
}
