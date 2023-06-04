import React from 'react';
import styles from "./HeaderLink.module.scss";
import Link from "next/link";

interface HeaderLinkI {
    url: string
    title: string
}

const HeaderLink: React.FC<HeaderLinkI> = ({url, title}) => {
    return (
        <div className={styles.link}>
            <Link href={`/${url}`}>
                <span>{title}</span>
            </Link>
        </div>
    );
};

export default HeaderLink;
