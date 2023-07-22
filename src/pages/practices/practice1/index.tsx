const Practice1 = () => {
  const calTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractice1 = () => {
    calTotalFee(1000);
  };
  return (
    <div>
      <h1>練習問題1:引数の型指定</h1>
      <button onClick={onClickPractice1}>練習問題1を実行</button>
    </div>
  );
};

export default Practice1;
