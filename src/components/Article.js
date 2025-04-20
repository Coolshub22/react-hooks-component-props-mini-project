import React from 'react'

export default function Article({title, date = "January 1, 1970", preview, minutes}) {
 const renderEmojis = () => {
    if (minutes < 30) {
        return "☕️".repeat(Math.ceil(minutes / 5));
    } else {
        return "🍱".repeat(Math.ceil(minutes / 10));
    }
 };
    return (
    <article>
        <h3>{title}</h3>
        <small>
        {date} • {renderEmojis()} {minutes} min read
        </small>
        <p>{preview}</p>
    </article>
  );
}
