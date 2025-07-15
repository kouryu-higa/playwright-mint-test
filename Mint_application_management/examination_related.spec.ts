// 申請管理の審査関連
    //申込サイトデータアップロード
    // 加盟店申請管理
    // 加盟店申請情報一覧予約履歴
    // JPQR申請データアップロード
    // JPQR加盟店申請管理


import { test, expect } from '@playwright/test';

    test('test', async ({ page }) => {
        //申込サイトデータアップロード
    await page.goto('https://www-fmg.tst.cardamom.kddi.com/login');
    await page.locator('#txt_login_id').click();
    await page.locator('#txt_login_id').press('ControlOrMeta+a');
    await page.locator('#txt_login_id').fill('smo0001');
    await page.locator('#txt_login_id').press('ArrowLeft');
    await page.locator('#txt_login_id').press('ArrowLeft');
    await page.locator('#txt_login_id').press('ArrowLeft');
    await page.locator('#txt_login_id').press('ArrowLeft');
    await page.locator('#txt_login_id').press('ArrowLeft');
    await page.locator('#txt_login_id').press('ArrowLeft');
    await page.locator('#txt_login_id').press('ArrowLeft');
    await page.locator('#txt_login_id').press('ArrowLeft');
    await page.locator('#txt_login_id').press('ArrowLeft');
    await page.locator('#txt_login_id').press('Tab');
    await page.locator('#txt_password').fill('kddi0077');
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'ログイン' }).click();
    const page1 = await page1Promise;
    await page1.getByRole('button', { name: '同意する' }).click();
    await page1.getByRole('button', { name: 'キャンセル' }).click();
    await page1.locator('#toggle_btn span').nth(1).click();
    await page1.getByText('シングルサインオン').click();
    const page2Promise = page1.waitForEvent('popup');
    await page1.getByRole('link', { name: 'Mint' }).click();
    const page2 = await page2Promise;
    await page2.getByText('申請管理', { exact: true }).click();
    await page2.getByRole('link', { name: '申込サイトデータアップロード' }).click();
    await expect(page2.locator('#wrap')).toContainText('au PAY 申込サイトデータアップロード');
    await expect(page2.locator('#div_warning_msg')).toContainText('入力内容チェックはアップロード受付け後におこないます。 処理状況は下記au PAY 申込サイトデータアップロード履歴よりご確認ください。 入力エラーがある場合、内容を修正の上、再度アップロードください。');
    await expect(page2.locator('#tr_upload_file')).toContainText('ファイルアップロード');
    await expect(page2.locator('#div_upload')).toContainText('入力内容確認');
    await expect(page2.locator('#wrap')).toContainText('au PAY 申込サイトデータアップロード 履歴');
    await expect(page2.locator('#common_template_submit_form_upload_list')).toContainText('アップロード日時');
    await expect(page2.locator('#common_template_submit_form_upload_list')).toContainText('ファイル名');
    await expect(page2.locator('#common_template_submit_form_upload_list')).toContainText('処理結果');
   
    // 加盟店申請管理
    await page2.getByText('申請管理', { exact: true }).click();
    await page2.getByRole('link', { name: '加盟店申請管理', exact: true }).click();
    await expect(page2.getByRole('heading')).toContainText('au PAY 加盟店申請検索');
    await expect(page2.locator('#tr_cp_code')).toContainText('企業コード');
    await expect(page2.locator('#tr_cp_type')).toContainText('CP区分');
    await expect(page2.locator('#div_cp_type')).toContainText('加盟店');
    await expect(page2.locator('#div_cp_type')).toContainText('仮アカウント');
    await expect(page2.locator('#div_cp_type')).toContainText('au PAY代理店');
    await expect(page2.locator('#tr_cp_name')).toContainText('企業名（ カナ）');
    await expect(page2.locator('#tr_member_name')).toContainText('au PAY 加盟店名（ カナ）');
    await expect(page2.locator('#tr_search_apli_date')).toContainText('申請（再申請）年月日');
    await expect(page2.locator('#tr_judge_comp_date_time')).toContainText('審査ステータス更新日');
    await expect(page2.locator('#tr_apli_type')).toContainText('申請区分');
    await expect(page2.locator('#div_apli_type')).toContainText('新規');
    await expect(page2.locator('#div_apli_type')).toContainText('追加');
    await expect(page2.locator('#div_apli_type')).toContainText('変更');
    await expect(page2.locator('#tr_judge_status')).toContainText('審査状況');
    await expect(page2.locator('#div_judge_status')).toContainText('未審査');
    await expect(page2.locator('#div_judge_status')).toContainText('審査中');
    await expect(page2.locator('#div_judge_status')).toContainText('保留');
    await expect(page2.locator('#div_judge_status')).toContainText('エスカレ中');
    await expect(page2.locator('#div_judge_status')).toContainText('CP確認中');
    await expect(page2.locator('#div_judge_status')).toContainText('差し戻し');
    await expect(page2.locator('#div_judge_status')).toContainText('承認');
    await expect(page2.locator('#div_judge_status')).toContainText('不合格');
    await expect(page2.locator('#div_judge_status')).toContainText('取り下げ');
    await expect(page2.locator('#div_search')).toContainText('検索');

    // 加盟店申請情報一覧予約履歴
    await page2.getByText('申請管理', { exact: true }).click();
    await page2.getByRole('link', { name: '加盟店申請情報一覧予約履歴' }).click();
    await expect(page2.getByRole('heading')).toContainText('au PAY 加盟店申請情報一覧予約履歴');
    await expect(page2.locator('#common_template_submit_form_search_list')).toContainText('11件中 1 ～ 11件を表示しています');
    await expect(page2.getByRole('rowgroup')).toContainText('予約日時');
    await expect(page2.getByRole('rowgroup')).toContainText('ファイル名');
    await expect(page2.getByRole('rowgroup')).toContainText('処理結果');
    await expect(page2.locator('#common_template_submit_form_search_list')).toContainText('11件中 1 ～ 11件を表示しています');

    // JPQR申請データアップロード
    await page2.getByText('申請管理', { exact: true }).click();
    await page2.getByRole('link', { name: 'JPQR申請データアップロード' }).click();
    await expect(page2.locator('#wrap')).toContainText('JPQR申請データアップロード');
    await expect(page2.locator('#div_warning_msg')).toContainText('入力内容チェックはアップロード受付け後におこないます。 処理状況は下記JPQR申請データアップロード履歴よりご確認ください。 入力エラーがある場合、内容を修正の上、再度アップロードください。');
    await expect(page2.locator('#tr_upload_file')).toContainText('ファイルアップロード');
    await expect(page2.locator('#btn_upload')).toContainText('入力内容確認');
    await expect(page2.locator('#wrap')).toContainText('JPQR申請データアップロード 履歴');
    await expect(page2.locator('#common_template_submit_form_upload_list')).toContainText('アップロード日時');
    await expect(page2.locator('#common_template_submit_form_upload_list')).toContainText('ファイル名');
    await expect(page2.locator('#common_template_submit_form_upload_list')).toContainText('アップロード担当者');
    await expect(page2.locator('#common_template_submit_form_upload_list')).toContainText('処理結果');

    // JPQR加盟店申請管理
    await page2.getByText('申請管理', { exact: true }).click();
    await page2.getByRole('link', { name: 'JPQR加盟店申請管理' }).click();
    await expect(page2.getByRole('heading')).toContainText('JPQR加盟店申請検索');
    await expect(page2.locator('#tr_web_reception_no')).toContainText('Web受付No');
    await expect(page2.locator('#tr_member_business_form')).toContainText('法人・個人');
    await expect(page2.locator('#div_member_business_form')).toContainText('法人');
    await expect(page2.locator('#div_member_business_form')).toContainText('個人');
    await expect(page2.locator('#tr_apli_id')).toContainText('申請ID');
    await expect(page2.locator('#tr_jpqr_apli_date')).toContainText('申込日');
    await expect(page2.locator('#tr_apli_date')).toContainText('申請日');
    await expect(page2.locator('#tr_update_date')).toContainText('更新日');
    await expect(page2.locator('#tr_judge_date')).toContainText('審査日');
    await expect(page2.locator('#tr_apli_type')).toContainText('申請区分');
    await expect(page2.locator('#div_apli_type')).toContainText('新規');
    await expect(page2.locator('#div_apli_type')).toContainText('再申請');
    await expect(page2.locator('#tr_judge_status')).toContainText('審査状況');
    await expect(page2.locator('#div_judge_status')).toContainText('未審査');
    await expect(page2.locator('#div_judge_status')).toContainText('未審査（再申請）');
    await expect(page2.locator('#div_judge_status')).toContainText('審査中');
    await expect(page2.locator('#div_judge_status')).toContainText('保留');
    await expect(page2.locator('#div_judge_status')).toContainText('エスカレ中');
    await expect(page2.locator('#div_judge_status')).toContainText('差し戻し');
    await expect(page2.locator('#div_judge_status')).toContainText('仮承認');
    await expect(page2.locator('#div_judge_status')).toContainText('承認');
    await expect(page2.locator('#div_judge_status')).toContainText('不合格');
    await expect(page2.locator('#tr_cp_code')).toContainText('企業コード');
    await expect(page2.locator('#tr_cp_code')).toContainText('企業名（ カナ）');
    await expect(page2.locator('#tr_member_name')).toContainText('au PAY 加盟店名（ カナ）');
    await expect(page2.locator('#tr_store_id')).toContainText('au PAY 店舗ID');
    await expect(page2.locator('#tr_store_id')).toContainText('au PAY 店舗名（ カナ）');
    await expect(page2.locator('#div_search')).toContainText('検索');

    //画面下部コピーライト
    await expect(page2.getByRole('contentinfo')).toContainText('COPYRIGHT (C) 2022 KDDI CORPORATION ALL RIGHTS RESERVED');
});