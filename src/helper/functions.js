const shorten = title => {
    const splitedTitle = title.split(" ")
    const newTitle = `${splitedTitle[0]} ${splitedTitle[1]} ${splitedTitle[2]}...`

    return newTitle
}

export { shorten }