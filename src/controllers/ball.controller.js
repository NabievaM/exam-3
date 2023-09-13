function time(endTime, createAt, ball) {
    let sum
    const diff = endTime.getTime() - createAt.getTime();
    const result = diff / 60000

    if (result > 0) {
        return ball;
    } else {
        const minut = (result / 5) * (-1);

        if (minut > ball) {
            return 0
        } else if (minut < ball) {
            sum = ball - (minut * 5)
            return sum;
        }
    }
};