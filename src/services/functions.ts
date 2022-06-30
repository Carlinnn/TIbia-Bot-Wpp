class toDate {
  date: string;

  constructor(date: string) {
    this.date = date;
  }

  getTime = () => {
    let hours = new Date(this.date).getHours();
    let minutes = new Date(this.date).getMinutes();

    return `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }`;
  };

  getDate = () => {
    let day = new Date(this.date).getDay();
    let month = new Date(this.date).getMonth();
    let year = new Date(this.date).getFullYear();

    return `${day < 10 ? "0" + day : day}/${
      month < 10 ? "0" + month : month
    }/${year}`;
  };
}

export { toDate };
