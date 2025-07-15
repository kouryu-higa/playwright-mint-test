//申請管理のその他申請関連
    // 企業名・口座情報変更申請管理
    // 店頭ツール追加申請ダウンロード

import { test, expect } from '@playwright/test';

    test('test', async ({ page }) => {
        // 企業名・口座情報変更申請管理
    await page.goto('https://www-fmg.tst.cardamom.kddi.com/login');
    await page.locator('#txt_login_id').click();
    await page.locator('#txt_login_id').fill('smo0001');
    await page.locator('#txt_password').click();
    await page.locator('#txt_password').fill('kddi0077');
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'ログイン' }).click();
    const page1 = await page1Promise;
    await page1.getByRole('button', { name: '同意する' }).click();
    await page1.locator('#toggle_btn span').first().click();
    await page1.getByText('シングルサインオン').click();
    const page2Promise = page1.waitForEvent('popup');
    await page1.getByRole('link', { name: 'Mint' }).click();
    const page2 = await page2Promise;
    await page2.getByText('申請管理', { exact: true }).click();
    await page2.getByRole('link', { name: '企業名・口座情報変更申請管理' }).click();
    await expect(page2.getByRole('heading')).toContainText('企業名・au PAY 口座情報変更申請検索');
    await expect(page2.locator('#tr_cp_code')).toContainText('企業コード');
    await expect(page2.locator('#tr_cpname_qrbank_change_apli_id')).toContainText('申請ID');
    await expect(page2.locator('#tr_apli_type')).toContainText('申請区分');
    await expect(page2.locator('#div_apli_type')).toContainText('企業名変更');
    await expect(page2.locator('#div_apli_type')).toContainText('au PAY 口座情報変更');
    await expect(page2.locator('#div_apli_type')).toContainText('企業名変更・au PAY 口座情報変更');
    await expect(page2.locator('#tr_cp_name_apply_date_time')).toContainText('企業名適用日');
    await expect(page2.locator('#tr_apply_start_ym_aft')).toContainText('au PAY 口座情報適用年月');
    await expect(page2.locator('#div_apply_start_ym_aft')).toContainText('～ (YYYY/MM)');
    await expect(page2.locator('#tr_apli_date_time')).toContainText('申請日');
    await expect(page2.locator('#tr_apli_status')).toContainText('ステータス');
    await expect(page2.locator('#div_apli_status')).toContainText('未審査');
    await expect(page2.locator('#div_apli_status')).toContainText('審査中');
    await expect(page2.locator('#div_apli_status')).toContainText('保留');
    await expect(page2.locator('#div_apli_status')).toContainText('エスカレ中');
    await expect(page2.locator('#div_apli_status')).toContainText('CP確認中');
    await expect(page2.locator('#div_apli_status')).toContainText('差し戻し');
    await expect(page2.locator('#div_apli_status')).toContainText('承認');
    await expect(page2.locator('#div_apli_status')).toContainText('取消');
    await expect(page2.locator('#div_apli_status')).toContainText('全て');
    await expect(page2.locator('#div_search')).toContainText('検索');

    // 店頭ツール追加申請ダウンロード
    await page2.getByText('申請管理', { exact: true }).click();
    await page2.getByRole('link', { name: '店頭ツール追加申請ダウンロード' }).click();
    await expect(page2.getByRole('heading')).toContainText('au PAY 店頭ツール追加申請一覧');
    await expect(page2.getByRole('rowgroup')).toContainText('申請年月日');
    await expect(page2.getByRole('rowgroup')).toContainText('ファイル名');
    await expect(page2.getByRole('rowgroup')).toContainText('ダウンロード');

    //コピーライト
    await expect(page2.getByRole('contentinfo')).toContainText('COPYRIGHT (C) 2022 KDDI CORPORATION ALL RIGHTS RESERVED');
});