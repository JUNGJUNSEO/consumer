export const formDate = (date : string) : string => {

    const now = Date.now()
    const diff = now - new Date(date).getTime()

    return "날짜"

}