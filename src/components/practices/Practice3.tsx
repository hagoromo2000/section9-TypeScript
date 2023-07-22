const Practice3 = () => {
  const getTotalFee = (num: number): number => {
    const total: number = num * 1.1;
    return total;
  };

  const onClickPractice3 = () => {
    let total: number = 0;
    total = getTotalFee(1000);
    console.log(total);
  };

  return (
    <div>
      <h1>練習問題3:変数の型指定</h1>
      <button onClick={onClickPractice3}>練習問題3を実行</button>
    </div>
  );
};

export default Practice3;
